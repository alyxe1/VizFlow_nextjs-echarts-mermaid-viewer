'use client';

import React, { useRef, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { EchartsData } from '../lib/mermaidParser';

interface EchartsGraphProps {
  data: EchartsData;
  highlightedNodeId: string | null;
  onBlankClick: () => void;
}

const EchartsGraph: React.FC<EchartsGraphProps> = ({ data, highlightedNodeId, onBlankClick }) => {
  const echartRef = useRef<any>(null);

  useEffect(() => {
    const instance = echartRef.current?.getEchartsInstance();
    if (!instance) return;

    instance.dispatchAction({ type: 'downplay', seriesIndex: 0 });

    if (highlightedNodeId) {
      const dataIndex = data.nodes.findIndex(n => n.id === highlightedNodeId);
      if (dataIndex !== -1) {
        instance.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: dataIndex,
        });
      }
    }
  }, [highlightedNodeId, data.nodes]);

  useEffect(() => {
    const instance = echartRef.current?.getEchartsInstance();
    if (!instance) return;

    const handleClick = (params: any) => {
      if (params.componentType !== 'series' || !params.data) {
        onBlankClick();
      }
    };

    instance.on('click', handleClick);

    return () => {
      instance.off('click', handleClick);
    };
  }, [onBlankClick]);

  const option = {
    tooltip: {},
    legend: [{
      data: data.categories.map(a => a.name)
    }],
    color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
    series: [
      {
        type: 'graph',
        layout: 'force',
        data: data.nodes,
        edges: data.links,
        categories: data.categories,
        roam: true,
        label: {
          show: true,
          position: 'right',
          formatter: '{b}',
        },
        edgeSymbol: ['none', 'arrow'],
        edgeSymbolSize: 10,
        edgeLabel: {
          show: true,
          formatter: (params: any) => params.data.label?.formatter || '',
          backgroundColor: '#fff',
          padding: [2, 4],
          borderRadius: 4,
        },
        force: {
          repulsion: 100,
          edgeLength: 50,
        },
        emphasis: {
          focus: 'adjacency',
          lineStyle: {
            width: 10,
          },
        },
      },
    ],
  };

  return <ReactECharts ref={echartRef} option={option} style={{ height: '100%', width: '100%' }} />;
};

export default EchartsGraph;
