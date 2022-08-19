// this code demonstrates event loop
// node myFile.js
const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = []; // operations running in the thread pool
// new Timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
  // check one: any pending setTimeOut, setInterval, setImmediate
  // check two: any pending OS tasks: server listening on port
  // check three: any pending long running operations(fs module)
  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

// entire body executes in one 'tick'
while(shouldContinue()) {
 // 1)node looks for any pendingTimers and see if any functions are 
 // ready to be called (for only setTimeOut and setInterval)
 
 // 2) node looks for pendingOSTasks and pendingOperations and calls
 // relevant callbacks

 // 3) pause execution continue when...
 // new pendingOSTask is done
 // new pendingOperation is done
 // timer is about to complete (setInterval and setTimeOut)

 // 4) look at pendingTimers. call any setImmediate

 // 5) handle any close events
}

// exit back to terminal 
