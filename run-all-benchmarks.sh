for e in "./tests/dist/benches"/*; do echo -e "\nRunning test $(basename ${e::-3})"; node $e; done
