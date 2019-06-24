
# Customer Managed Environment Schema

```
https://ns.adobe.com/xdm/common/selfservice
```

A customer managed environment is an environment that allows a system integration or deployer to manage applications. This is also known as self service.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [common/selfservice.schema.json](common/selfservice.schema.json) |

## Customer Managed Environment Example
```json
{
  "id": "urn:selfsevice:example1",
  "xdm:tenant": "https://selfsevice.adobe.io/tenant/id/82235bac-2b81-4e70-90b5-2bd1f04b5c7b",
  "xdm:application": "http://git.corp.adobe.com/Applications/application1/definition.json",
  "xdm:environment": "beta",
  "xdm:selfServicePortal": "https://selfsevice.adobe.io/portal"
}
```

# Customer Managed Environment Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:CICDPipeline](#xdmcicdpipeline) | `string` | Optional | Customer Managed Environment (this schema) |
| [xdm:application](#xdmapplication) | `string` | **Required** | Customer Managed Environment (this schema) |
| [xdm:applicationOwner](#xdmapplicationowner) | `string` | Optional | Customer Managed Environment (this schema) |
| [xdm:artifact](#xdmartifact) | `string` | Optional | Customer Managed Environment (this schema) |
| [xdm:artifactRepository](#xdmartifactrepository) | `string` | Optional | Customer Managed Environment (this schema) |
| [xdm:cluster](#xdmcluster) | `string` | Optional | Customer Managed Environment (this schema) |
| [xdm:codeRepository](#xdmcoderepository) | `string` | Optional | Customer Managed Environment (this schema) |
| [xdm:deployment](#xdmdeployment) | `string` | Optional | Customer Managed Environment (this schema) |
| [xdm:environment](#xdmenvironment) | `string` | **Required** | Customer Managed Environment (this schema) |
| [xdm:provisioning](#xdmprovisioning) | `string` | Optional | Customer Managed Environment (this schema) |
| [xdm:qualityGateState](#xdmqualitygatestate) | `object` | Optional | Customer Managed Environment (this schema) |
| [xdm:runningInstance](#xdmrunninginstance) | `string` | Optional | Customer Managed Environment (this schema) |
| [xdm:selfServiceAPI](#xdmselfserviceapi) | `string` | Optional | Customer Managed Environment (this schema) |
| [xdm:selfServiceBuild](#xdmselfservicebuild) | `string` | Optional | Customer Managed Environment (this schema) |
| [xdm:selfServiceUI](#xdmselfserviceui) | `string` | Optional | Customer Managed Environment (this schema) |
| [xdm:service](#xdmservice) | `string` | Optional | Customer Managed Environment (this schema) |
| [xdm:tenant](#xdmtenant) | `string` | **Required** | Customer Managed Environment (this schema) |
| [xdm:topology](#xdmtopology) | `string` | Optional | Customer Managed Environment (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:CICDPipeline

A continuous deployment continuous integration pipeline (xdm:CICDPipeline) is used to deploy an application (see `xdm:application`) conforming to a defined topology (see `xdm:topology`) into an environment (see `xdm:environment`). The pipeline runs a standard process that understands the defining of the topology, environment and application. The pipeline is a shared resource used by many applications and tenants (see `xdm:tenant`), although special tenants may have customized pipelines. A pipeline will have a URI which defines the API.

`xdm:CICDPipeline`
* is optional
* type: `string`
* defined in this schema

### xdm:CICDPipeline Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:application

A set of code, content, and data that together implement an experience. Some applications do not allow a system integrator, partner or customer to perform customization. Other applications may allow customization on a per instance basis. These may be applications managed by the system integrator, partner or customer. An application be defined by a URI referencing the definition of the application.

`xdm:application`
* is **required**
* type: `string`
* defined in this schema

### xdm:application Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:applicationOwner

An application owner, distinct from a tenant  (`xdm:tenant`), owns an application (see `xdm:application`) and manages its state. The application owner may be a individual user or roll. Typically the application owner will be a member of the tenant, however that is not a requirement.

`xdm:applicationOwner`
* is optional
* type: `string`
* defined in this schema

### xdm:applicationOwner Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:artifact

An artifact is a package forming the implementation of a service (see `xdm:service`). It is is stored in the artifactRepository (see `xdm:artifactRepository`) published to the artifactRepository by the CICDPipeline (see `xdm:CICDPipeline`). An artifact has a version. Once an artifact with a version is published it becomes immutable. A version may be a unique string such as a SHA identifying a commit in a Git repository, or a semantic version number. Which is chosen depends on the preferred versioning mechanism.

`xdm:artifact`
* is optional
* type: `string`
* defined in this schema

### xdm:artifact Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:artifactRepository

An artifact repository stores released binaries including artifacts (see `xdm:artifact`) either from vendors or created by the CICDPipeline (see `xdm:CICDPipeline`). These artifacts are used by the deployment pipeline to deploy an application (see `xdm:application`) into an environment (see `xdm:environment`). The artifactRepository will allow many versions of an artifact to exist and will be organized in a way that will allow artifacts specific to a tenant (see `xdm:tenant`), application, topology (see `xdm:topology`) and environment to be stored. The artifact repository must not be used to store any sensitive data.

`xdm:artifactRepository`
* is optional
* type: `string`
* defined in this schema

### xdm:artifactRepository Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:cluster

A group of instances deployed within a environment (see `xdm:environment` ) as part of a topology (see `xdm:topology`) that deliver a service  within an application (see `xdm:application`) often using a single source of persistence. A topology may have one or more clusters (see `xdm:cluster`). A service (see `xdm:service`) is typically delivered by a single cluster. Members of the cluster are typically stateless and disposable, meaning they are created and destroyed to maintain a suitable cluster size to deliver the service against the agreed SLA. A cluster will have a URI referencing the definition of the cluster, including parameters defining its scaling behavior.

`xdm:cluster`
* is optional
* type: `string`
* defined in this schema

### xdm:cluster Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:codeRepository

A code repository stores the application (see `xdm:application`) code and any definitions for topologies (see `xdm:topology`), services (see `xdm:service`), clusters (see `xdm:cluster`) and environments (see `(see `xdm:environment`). The CI/CD Pipeline (see `xdm:CICDPipeline`) will read the Code repository to perform integration and deploy the application.

`xdm:codeRepository`
* is optional
* type: `string`
* defined in this schema

### xdm:codeRepository Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:deployment

Deployment is the final act of deploying an application (see `xdm:application`) into an environment (see `xdm:environment`) prior to going live in that environment. This should be achieved via an automated process working from specification and configuration stored in the codeRepository (see `xdm:codeRepository`). Some applications may require the installation of packages directly into a service (see `xdm:service`) or API provided by the application. Where this is the case the deployment process must be capable of supporting that style of deployment and must not make the application or any of its parts available to serve requests while the deployment is incomplete. The deployment process should include steps to validate that the deployment was successful. Deployment is not the same as provisioning (see `xdm:provisioning`), which is a pre-requisite for deployment. Typically a deployment will be performed every time changes in the code repository needs to be made available in the environment` Typically the deployment process is implemented by the CICDPipeline (see `xdm:CICDPipeline`).

`xdm:deployment`
* is optional
* type: `string`
* defined in this schema

### xdm:deployment Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:environment

A tenant (see `xdm:tenant`) may work with 1..n environments where the application (see `xdm:application`) runs. Each environment serves a purpose in the CI/CD chain providing a structure whereby changes  to the application can be rolled out. Typically the owner of the application manages transitions between environments. A system integrator, partner or customer may be the owner of the application especially where the application has  been extended and customized. An environment may have a URI referencing the definition of the environment. 

`xdm:environment`
* is **required**
* type: `string`
* defined in this schema

### xdm:environment Type


`string`



### xdm:environment Known Values
| Value | Description |
|-------|-------------|
| `dev` | A development environment for engineering teams to develop and test against prior to releasing to the QE teams. |
| `qe` | A deployment provisioned to satisfy the quality engineering process. |
| `stage` | A final deployment environment before production. Typically used to perform final testing and give a reference  deployment to the last production deployment. |
| `beta` | A production deployment environment used to introduce end-users of the `application` to new features. |
| `prod` | The production deployment environment. |




## xdm:provisioning

Provisioning is the operation which sets up everything required to allow a tenant (see `xdm:tenant`) to deploy an application (see `xdm:application`). This includes setting up the Code Repository (see `xdm:codeRepository`), and allocating any resources that the CI/CD pipeline (see `xdm:CICDPipeline`) might require to deploy the application. Provisioning will ensure that any costs or charges are appropriately registered as being related to the tenant so that billing systems can ensure the tenant is billed. Where the infrastructure is dedicated to the tenant, provisioning will ensure that sufficient infrastructure is available when the first deployment (see `xdm:deployment`) is being performed. If the infrastructure is to be provisioned from a pool, provisioning will ensure that the pool is notified of the level of future demand. Provisioning will understand any legal or jurisdictional requirements and constraints that the tenant may have expressed in the contract and ensure that those requirements and constraints are satisfied.

`xdm:provisioning`
* is optional
* type: `string`
* defined in this schema

### xdm:provisioning Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:qualityGateState

The customer CICDPipeline (see `xdm:CICDPipeline`) defines a number of quality gates that will determine the success or fail of the entire process. If any Pass property being false indicates the quality gate has failed.

`xdm:qualityGateState`
* is optional
* type: `object`
* defined in this schema

### xdm:qualityGateState Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `*Pass`| boolean | Optional |



#### *Pass

A quality gate test, false means it failed, true means it passed.

`*Pass`
* is optional
* type: `boolean`

##### *Pass Type


`boolean`










## xdm:runningInstance

An instance is 1 copy of a service (see `xdm:service`) implementation running within a cluster (see `xdm:cluster`) within a topology (see `xdm:topology`) deployed to an environment (see `xdm:environment`) as an application (see `xdm:application`) for a tenant (see `xdm:tenant`). Where the application is a java application, deployed to a provisioned virtual machine, the instance will be the java process, however where the application has been deployed as part of a container based application the instance will be the running container.

`xdm:runningInstance`
* is optional
* type: `string`
* defined in this schema

### xdm:runningInstance Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:selfServiceAPI

The self service API is a well defined API that will, using the model defined in XDM expose to a suitably authorized client a service implementation that allows that client to one or more applications (see `xdm:application`) within a tenant (see `xdm:tenant`). The API must maintain tenant boundaries, as defined and controlled by an identity provider.

`xdm:selfServiceAPI`
* is optional
* type: `string`
* defined in this schema

### xdm:selfServiceAPI Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:selfServiceBuild

The process by which the CICDPipeline (see `xdm:CICDPipeline`) creates a artifact (see `xdm:artifact`). How the build is performed and what the build creates depends on the source code stored in the codeRepository , which will also contain instructions to perform the build. In the case of a java artifact, the build would typically be performed by maven or gradle. In the case of a docker image, the build might be performed by make.

`xdm:selfServiceBuild`
* is optional
* type: `string`
* defined in this schema

### xdm:selfServiceBuild Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:selfServiceUI

A user interface or portal containing all the functionality of the selfServiceAPI (see `xdm:selfServiceAPI`) presented for use by a human in a web browser interface. Typically this UI will use the selfServiceAPI and be implemented as a browser application or SPA.

`xdm:selfServiceUI`
* is optional
* type: `string`
* defined in this schema

### xdm:selfServiceUI Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:service

An application (see `xdm:application`) consists of one or more services, deployed into a topology (see `xdm:topology`) and implemented as a cluster (see `xdm:cluster`). The service will generally expose an API to consumers however that service may be private to the application. The implementation of a service my be changed without changing the specification of the service. A service will have a URI defining it.

`xdm:service`
* is optional
* type: `string`
* defined in this schema

### xdm:service Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:tenant

A description of a customer having a agreement to use a specific set of services (see `xdm:service`). A tenant will typically have a URI which can be used to reference the tenant, and should be resolvable by an identity provider.

`xdm:tenant`
* is **required**
* type: `string`
* defined in this schema

### xdm:tenant Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:topology

A topology is a logical group of services (see `xdm:service`) and their implementations that together form an application (see `xdm:application`). The topology may consist of services and service implementations at different layers throughout an application. Some services within a topology may be satisfied by shared components, for instance many applications may share an edge traffic load balancer. A service will have a URI defining it.

`xdm:topology`
* is optional
* type: `string`
* defined in this schema

### xdm:topology Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))





