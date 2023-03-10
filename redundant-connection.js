const findRedundantConnection = edges => {
    let dsu = new DSU();
    // Traverse edges, returning the edge when it forms a cycle
    for(const edge of edges) {
        let [u, v] = edge;
        dsu.add(u);
        dsu.add(v);
        if(!dsu.union(u, v)) return edge;
    }
};

class DSU {
    // Store the parent/child relationship in a map
    constructor() {
        this.parent = new Map();
    }
    
    // Add node to DSU as parent node with rank/weight 1;
    add(val) {
        if(!this.parent.get(val)) this.parent.set(val, -1);
    }
    
    // Finds the node's top most parent (When it get to a negative value)
    find(val) {
        let current = val;
        while(this.parent.get(current) > 0) {
            current = this.parent.get(current);
        }
        
        // Collapse - Assign the node directly to the top most parent
        if(current !== val) this.parent.set(val, current);
        return current;
    }
    
    union(u, v) {
        // Get both node's top most parents
        // If they're the same, a cycle exists
        let uParent = this.find(u);
        let vParent = this.find(v);
        if(uParent === vParent) return false;
        
        // Get the rank/weight of each parent
        let uRank = this.parent[uParent];
        let vRank = this.parent[vParent];
        
        // The greater rank maintains being the parent (The lesser value since they're negative)
        // The smaller rank becomes the child
        if(uRank < vRank) {
            this.parent[uParent] = uRank - vRank;
            this.parent.set(vParent, uParent);
        } else {
            this.parent[vParent] = uRank - vRank;
            this.parent.set(uParent, vParent);
        }
        
        return true;
    }
}