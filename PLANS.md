The reason for this app is to enable helpful capabilities for mesh nodes.
Some details of availability/connectivity will be retrieved from the network.
A tool such as [babelweb2](https://github.com/Vivena/babelweb2) could be helpful in showing how to collect these details.
Some interesting stats would be:

* number of peered nodes
* number of peers (includes peers of peers)
* address information
* possibly routing details (metric, next hop, id, etc.)

Another area of focus will be displaying details regarding available services on each node.
These resources/services could be:

* data URL
* IPFS resource
* scuttlebutt
* non-mesh resources
  * internet
  * connected clients (this node is a router for non-mesh devices)

I want to understand how resources are made available to peers.
For instance, imagine that internet connectivity is available from multiple peers.
Is it possible to make requests for a shared resource from multiple peers?
This scenario would mean splitting a request among multiple peers seemlessly.
These steps would have to be taken:

* a request is made from a mesh node (requesting peer)
* multiple peers (providing peers) are determined to be able to provide the resource
* an initial request is sent to each peer
* the initial response includes a manifest of resources that are part of the request
* requesting peer determines how best to request the resources based on
  * connection speed to the providing peers
  * size of each resource in the manifest
  * current utilization of each providing peer
