for e in "./benchmarks/dist"/*/*; do echo -e "\nRunning test $(basename ${e})"; node $e; done
