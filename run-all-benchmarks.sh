for e in "./benchmarks/dist"/*; do echo -e "\nRunning test $(basename ${e::-3})"; node $e; done
