export interface EchartsNode {
  id: string;
  name: string;
  symbolSize: number;
  category: number;
  label?: { show?: boolean; formatter?: string; };
}

export interface EchartsLink {
  source: string;
  target: string;
  label?: { show: boolean; formatter?: string; };
}

export interface EchartsData {
  nodes: EchartsNode[];
  links: EchartsLink[];
  categories: { name: string }[];
}

const getNodeId = (nodeStr: string): string => {
  const match = nodeStr.trim().match(/^([^[\\\]s]+)/);
  return match ? match[0].trim() : nodeStr.trim();
};

export const parseMermaidToEcharts = (mermaidCode: string): EchartsData => {
  const lines = mermaidCode.trim().split('\n');

  const nodeData = new Map<string, { name: string; categoryIndex: number }>();
  const links: EchartsLink[] = [];
  const categories = [
    { name: 'Default' },
    { name: '层级一: 液体与动力 (Fluid & Power)' },
    { name: '层级二: 流体连接件 (Fluid Connectors)' },
    { name: '层级三: 核心散热组件 (Core Thermal Components)' },
    { name: '层级四: 系统集成与解决方案 (System Integration & Solutions)' },
    { name: '层级五: 服务器与ODM整机 (Server & ODM Assembly)' },
    { name: '层级六: 最终用户与生态核心 (End-Users & Ecosystem Core)' },
  ];
  const categoryIdMap: { [key: string]: number } = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6
  };

  let currentCategoryIndex = 0;
  let inFirstLevelSubgraph = false;

  const linkRegex = /^\s*(.+?)\s*(?:--\s*(.*?)\s*-->|-->(?:\|(.*?)\|)?)\s*(.+)\s*$/;
  const nodeDefRegex = /([^[\\\]s]+)\[([^\]]+)]/g;
  const subgraphStartRegex = /^\s*subgraph\s+([A-Z])\[/;
  const subgraphEndRegex = /^\s*end/;

  // Pre-scan for all labeled nodes
  for (const line of lines) {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith('subgraph')) continue; // Skip subgraph definitions

    let defMatch;
    nodeDefRegex.lastIndex = 0;
    while ((defMatch = nodeDefRegex.exec(trimmedLine)) !== null) {
      const id = defMatch[1].trim();
      const name = defMatch[2].trim();
      nodeData.set(id, { name, categoryIndex: 0 });
    }
  }

  // Process structure
  for (const line of lines) {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith('graph') || trimmedLine.startsWith('%%')) continue;

    const subgraphStartMatch = trimmedLine.match(subgraphStartRegex);
    if (subgraphStartMatch) {
      const catId = subgraphStartMatch[1];
      currentCategoryIndex = categoryIdMap[catId] || 0;
      inFirstLevelSubgraph = true;
      continue;
    }

    if (subgraphEndRegex.test(trimmedLine)) {
      inFirstLevelSubgraph = false;
      currentCategoryIndex = 0;
      continue;
    }

    const linkMatch = trimmedLine.match(linkRegex);
    if (linkMatch) {
      const [_, sourceStr, label1, label2, targetStr] = linkMatch;
      const sourceId = getNodeId(sourceStr);
      const targetId = getNodeId(targetStr);

      if (!nodeData.has(sourceId)) nodeData.set(sourceId, { name: sourceId, categoryIndex: 0 });
      if (!nodeData.has(targetId)) nodeData.set(targetId, { name: targetId, categoryIndex: 0 });

      if (inFirstLevelSubgraph) {
        if(nodeData.get(sourceId)!.categoryIndex === 0) nodeData.get(sourceId)!.categoryIndex = currentCategoryIndex;
        if(nodeData.get(targetId)!.categoryIndex === 0) nodeData.get(targetId)!.categoryIndex = currentCategoryIndex;
      }

      const link: EchartsLink = { source: sourceId, target: targetId };
      const linkLabel = label1 || label2;
      if (linkLabel) {
        link.label = { show: true, formatter: linkLabel.trim().replace(/^["'](.*)["']$/, '$1') };
      }
      links.push(link);
    } else if (inFirstLevelSubgraph) {
        const nodeId = getNodeId(trimmedLine);
        if (nodeData.has(nodeId)) {
            if(nodeData.get(nodeId)!.categoryIndex === 0) nodeData.get(nodeId)!.categoryIndex = currentCategoryIndex;
        }
    }
  }

  const finalNodes: EchartsNode[] = Array.from(nodeData.entries()).map(([id, data]) => ({
    id,
    name: data.name,
    symbolSize: 40,
    category: data.categoryIndex,
    label: { show: true, formatter: data.name },
  }));

  return { nodes: finalNodes, links, categories };
};
