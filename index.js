// Initialize Bull Queue
const { Queue } = require('bull');
const errorQueue = new Queue('errorQueue');

// Define a job processor
errorQueue.process(async (job) => {
  try {
    // Code that may throw an error
    throw new Error('Something went wrong!');
  } catch (error) {
    // Handle the error
    console.error(`Error in job ${job.id}: ${error.message}`);
    // You can also retry the job if needed:
    // job.retry();
  }
});

// Add job to the queue
errorQueue.add({});
