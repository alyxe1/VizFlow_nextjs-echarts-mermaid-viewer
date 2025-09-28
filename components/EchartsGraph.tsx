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
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        myZoomIn: {
          show: true,
          title: 'Zoom In',
          icon: 'path://M10.5,0 C16.3,0 21,4.7 21,10.5 C21,16.3 16.3,21 10.5,21 C4.7,21 0,16.3 0,10.5 C0,4.7 4.7,0 10.5,0 Z M10.5,2 C5.8,2 2,5.8 2,10.5 C2,15.2 5.8,19 10.5,19 C15.2,19 19,15.2 19,10.5 C19,5.8 15.2,2 10.5,2 Z M10,5 L11,5 L11,10 L16,10 L16,11 L11,11 L11,16 L10,16 L10,11 L5,11 L5,10 L10,10 L10,5 Z',
          onclick: () => {
            const instance = echartRef.current?.getEchartsInstance();
            if (instance) {
              const option = instance.getOption();
              const zoom = option.series[0].zoom * 1.2;
              instance.setOption({ series: [{ ...option.series[0], zoom }] });
            }
          },
        },
        myZoomOut: {
          show: true,
          title: 'Zoom Out',
          icon: 'path://M10.5,0 C16.3,0 21,4.7 21,10.5 C21,16.3 16.3,21 10.5,21 C4.7,21 0,16.3 0,10.5 C0,4.7 4.7,0 10.5,0 Z M10.5,2 C5.8,2 2,5.8 2,10.5 C2,15.2 5.8,19 10.5,19 C15.2,19 19,15.2 19,10.5 C19,5.8 15.2,2 10.5,2 Z M5,10 L16,10 L16,11 L5,11 L5,10 Z',
          onclick: () => {
            const instance = echartRef.current?.getEchartsInstance();
            if (instance) {
              const option = instance.getOption();
              const zoom = option.series[0].zoom / 1.2;
              instance.setOption({ series: [{ ...option.series[0], zoom }] });
            }
          },
        },
        restore: {
          show: true,
          title: 'Reset',
        },
        saveAsImage: { show: true },
      },
      iconStyle: {
        borderColor: '#666',
        borderWidth: 1,
      },
      emphasis: {
        iconStyle: {
          borderColor: '#3e98ff',
        },
      },
    },
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
