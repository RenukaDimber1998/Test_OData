import cds, { ApplicationService, event } from "@sap/cds"; // Import 'event' type from '@sap/cds'

import { Request } from 'express'; // Import Request type from express
import { SELECT } from '@sap/cds'; // Import SELECT function from '@sap/cds'

export default class SampleService extends ApplicationService {
   async init(): Promise<void> {
      await super.init();
      console.log("here");
      //const ODataDestination = "globalsolmanfiori";
      const ODataDestination = "SolmanOData";
      const ODataService = await cds.connect.to(ODataDestination);
      const { Incident_detSet } = ODataService.entities;
      const result = await ODataService.run(SELECT(Incident_detSet).limit(100));
      //console.log(result);
      
   }

}