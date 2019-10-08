#!/usr/bin/env bash
## clean up non experience related schemas
rm -rf tempinput/extensions/ims
rm -rf tempinput/extensions/aem
mkdir tempinput/extensions/adobe/experience/offer-management-tmp
cp tempinput/extensions/adobe/experience/offer-management/offer-detail.schema.json tempinput/extensions/adobe/experience/offer-management-tmp/
cp tempinput/extensions/adobe/experience/offer-management/offer-activity-detail.schema.json tempinput/extensions/adobe/experience/offer-management-tmp/
cp tempinput/extensions/adobe/experience/offer-management/proposition-response-detail.schema.json tempinput/extensions/adobe/experience/offer-management-tmp/
rm -rf tempinput/extensions/adobe/experience/offer-management
mv tempinput/extensions/adobe/experience/offer-management-tmp tempinput/extensions/adobe/experience/offer-management

rm -rf tempinput/schemas/assets

rm -rf tempinput/schemas/common/event
rm -rf tempinput/schemas/common/descriptors
rm -rf tempinput/schemas/common/page.*
rm -rf tempinput/schemas/common/selfservice.*
rm -rf tempinput/schemas/common/principal.*
rm -rf tempinput/schemas/common/identity-provider.*
rm -rf tempinput/schemas/common/eventenvelope.*
rm -rf tempinput/schemas/common/context.jsonld
rm -rf tempinput/schemas/common/eventenvelope.*
rm -rf tempinput/schemas/common/context.jsonld

rm -rf tempinput/schemas/content/repository-policies
rm -rf tempinput/schemas/content/repository.*
rm -rf tempinput/schemas/content/component*.*
rm -rf tempinput/schemas/content/content*.*
rm -rf tempinput/schemas/content/page-*.*

rm -rf tempinput/schemas/external/activity-streams-2
rm -rf tempinput/schemas/external/hal
rm -rf tempinput/schemas/external/repo/access*.*
rm -rf tempinput/schemas/external/repo/asset.*
rm -rf tempinput/schemas/external/repo/*directory*.*
rm -rf tempinput/schemas/external/repo/effectiveprivileges*.*

find tempinput -name *.example.*.json -type f -delete

