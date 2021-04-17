for e in "./dist/tests/benches"/*; do echo -e "\nRunning test $(basename ${e::-3})"; node $e; done
