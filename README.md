# Adobe Experience Manager 6.3: Dialog fields customization

This is a sample package showing how to customize Touch UI Dialog Fiels in AEM 6.3. For more information on that topic, you can refer to the CQ Gems page at http://dev.day.com/content/ddc/en/gems/customizing-dialog-fields-in-touch-ui.html.

## Building 
 
This project uses Maven for building. Common commands:

From the project directory, run ``mvn clean install content-package:install`` to build the bundle and content package and install to a CQ instance.

## Using with VLT 
 
To use vlt with this project, first build and install the package to your local CQ instance as described above. Then cd to `src/main/content/jcr_root` and run

    vlt --credentials admin:admin co http://localhost:4502/crx/-/jcr:root . --force

Once the working copy is created, you can use the normal ``vlt up`` and ``vlt ci`` commands.