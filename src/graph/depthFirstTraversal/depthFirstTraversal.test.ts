import {depth_first_traversal} from "./depthFirstTraversal";
import { describe, expect, it } from "vitest";

describe("#depthFirstTraversal", () => {
  it("check if number contains", () => {
    
    const graph = [
        [2, 3], 
        [0, 4], 
        [1], 
        [], 
        [],
      ];
      
    expect(depth_first_traversal(graph, 0)).toStrictEqual([0, 3, 2, 1, 4]);
  });

  it("check if number contains", () => {
    
    const graph_2 = [ 
        [ 1, 2 ], 
        [ 2 ], 
        [ 0, 3 ], 
        [ 3 ] 
      ];

    expect(depth_first_traversal(graph_2, 2)).toStrictEqual([2, 3, 0, 1]);
  });

});