export default class Marketing {
  update({id, userName}) {
    /*
    it's important to remember that the function [update] is responsible of handling 
    this errors/exceptions 

    our subject won't have any await there (or something that might block any execution)
    our subject is the engine to send data to all observers
    */
    console.log(`[${id}]: [marketing] will send an welcome email to [${userName}]`)
  }
}