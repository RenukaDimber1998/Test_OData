using {SolmanOData as odata} from '../srv/external/SolmanOData';


service warehouse {
  //warehouse/hello(to='world')
  function hello(to : String)     returns String;
  action   search(input : String) returns Boolean;
  entity ZIncidentDetails as projection on odata.Incident_detSet;
}
