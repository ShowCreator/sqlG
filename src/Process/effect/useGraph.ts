/*
 * @Author: sfy
 * @Date: 2023-05-12 23:25:19
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-12 23:28:46
 * @FilePath: /sqlG/src/Process/effect/useGraph.ts
 * @Description: update here
 */

import G6, { Graph } from '@antv/g6';
import { useEffect, useRef, useState } from 'react';

export const useGraph = () => {
  const [graph, setGraph] = useState<Graph>();
  const container = useRef<HTMLDivElement>();

  useEffect(() => {
    const g = new G6.Graph({
      container: container.current,
      width: 800,
      height: 400,
      defaultNode: {
        size: [300, 400],
        type: 'dice-er-box',
        color: '#5B8FF9',
        style: {
          fill: '#9EC9FF',
          lineWidth: 3,
        },
        labelCfg: {
          style: {
            fill: 'black',
            fontSize: 20,
          },
        },
      },
      defaultEdge: {
        type: 'dice-er-edge',
        style: {
          stroke: '#e2e2e2',
          lineWidth: 4,
          endArrow: true,
        },
      },
      modes: {
        default: ['dice-er-scroll', 'drag-node', 'drag-canvas'],
      },
      layout: {
        type: 'dagre',
        rankdir: 'LR',
        align: 'UL',
        controlPoints: true,
        nodesepFunc: () => 0.2,
        ranksepFunc: () => 0.5,
      },
      animate: true,
    });
    setGraph(g);
  }, []);

  return {
    graph,
    container,
  };
};
