/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const result = []
  const path = [0]
  const dfs = (startNodeIndex = 0) => {
    if (startNodeIndex === graph.length - 1) {
      result.push(path.slice())
      return
    }
    for (let i = 0; i < graph[startNodeIndex].length; i++) {
      const val = graph[startNodeIndex][i];
      path.push(val)
      dfs(val)
      path.pop()
    }
  }
  dfs()

  return result
};