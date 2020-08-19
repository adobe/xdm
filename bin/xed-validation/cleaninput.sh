#!/usr/bin/env bash
## clean up non experience related schemas
mkdir tempinput/extensions/adobe/experience/offer-management-tmp
cp tempinput/extensions/adobe/experience/offer-management/offer-detail.schema.json tempinput/extensions/adobe/experience/offer-management-tmp/
cp tempinput/extensions/adobe/experience/offer-management/offer-activity-detail.schema.json tempinput/extensions/adobe/experience/offer-management-tmp/
cp tempinput/extensions/adobe/experience/offer-management/proposition-response-detail.schema.json tempinput/extensions/adobe/experience/offer-management-tmp/
rm -rf tempinput/extensions/adobe/experience/offer-management
mv tempinput/extensions/adobe/experience/offer-management-tmp tempinput/extensions/adobe/experience/offer-management

rm -rf tempinput/components/datatypes/assets
rm -rf tempinput/components/datatypes/page.*
rm -rf tempinput/components/datatypes/selfservice.*
rm -rf tempinput/components/datatypes/principal.*
rm -rf tempinput/components/datatypes/identity-provider.*
rm -rf tempinput/components/datatypes/eventenvelope.*
rm -rf tempinput/components/datatypes/context.jsonld
rm -rf tempinput/components/datatypes/content/component*.*
rm -rf tempinput/components/datatypes/content/page-*.*
rm -rf tempinput/components/datatypes/external/activity-streams-2
rm -rf tempinput/components/datatypes/external/hal
rm -rf tempinput/components/datatypes/external/repo/access*.*
rm -rf tempinput/components/datatypes/external/repo/asset.*
rm -rf tempinput/components/datatypes/external/repo/*directory*.*

find tempinput -name *.example.*.json -type f -delete
find tempinput -name *.md -type f -delete

