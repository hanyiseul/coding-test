{
    class TrieNode {
        constructor() {
            this.children = {};
            this.isEnd = false;
        }
    }

    class Trie {
        constructor() {
            this.root = new TrieNode();
        }

        insert(word) {
            let node = this.root;
            for (const char of word) {
                if (!node.children[char]) {
                    node.children[char] = new TrieNode();
                }
                node = node.children[char];
            }
            node.isEnd = true;
        }

        search(word) {
            let node = this.root;
            for (const char of word) {
                if (!node.children[char]) return false;
                node = node.children[char];
            }
            return node.isEnd;
        }

        startsWith(prefix) {
            let node = this.root;
            for (const char of prefix) {
                if (!node.children[char]) return [];
                node = node.children[char];
            }

            const result = [];

            const dfs = (currentNode, word) => {
                if (currentNode.isEnd) {
                    result.push(word);
                }

                for (const char in currentNode.children) {
                    dfs(currentNode.children[char], word + char);
                }
            };

            dfs(node, prefix);

            return result;
        }
    }

    const trie = new Trie();
    trie.insert("점심 메뉴 추천");

    // console.log(trie.startsWith("점심")); // [ '점심 메뉴 추천' ]
}

{
    class TrieNode {
        constructor() {
            this.children = {};
            this.isEnd = false;
        }
    }

    class Trie {
        constructor() {
            this.root = new TrieNode();
        }

        insert(word) {
            let node = this.root;
            for (const char of word) {
                if (!node.children[char]) {
                    node.children[char] = new TrieNode();
                }
                node = node.children[char];
            }
            node.isEnd = true;
        }

        search(word) {
            let node = this.root;
            for (const char of word) {
                if (!node.children[char]) return false;
                node = node.children[char];
            }
            return node.isEnd;
        }

        startsWith(prefix) {
            let node = this.root;
            for (const char of prefix) {
                if (!node.children[char]) return [];
                node = node.children[char];
            }

            const result = [];

            const dfs = (currentNode, word) => {
                if (currentNode.isEnd) {
                    result.push(word);
                }

                for (const char in currentNode.children) {
                    dfs(currentNode.children[char], word + char);
                }
            };

            dfs(node, prefix);

            return result;
        }
    }

    function getWords(node, prefix, result) {
        if (node.isEnd) result.push(prefix);
        for (const char in node.children) {
            getWords(node.children[char], prefix + char, result);
        }
    }

    function autoComplete(trie, prefix) {
        let node = trie.root;
        for (const char of prefix) {
            if (!node.children[char]) return [];
            node = node.children[char];
        }

        const result = [];
        getWords(node, prefix, result);
        return result;
    }

    const trie = new Trie();
    trie.insert("addEventListener");
    trie.insert("function");
    trie.insert("const");

    console.log(autoComplete(trie, "add")); 
    console.log(autoComplete(trie, "fun")); 
    console.log(autoComplete(trie, "con")); 
}