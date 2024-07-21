// admin will create and manage topics

const { kafka } = require('./client');
async function init() {


    // -------- connecting admin --------------
    const admin = kafka.admin();
    console.log('Connecting admin...');
    admin.connect();
    console.log('admin connecting success...');

    // ------ topics -----------
    console.log('Creating topic [rider-updates]')
    await admin.createTopics({
        topics: [
            {
                topic: 'rider-updates', // name of the topic
                numPartitions: 2, // number of partitions
            }
        ]
    });
    console.log('Topic created successfully [rider-updates]')
    
    console.log('Disconnecting admin...')
    // disconnect the admin
    await admin.disconnect();
}
init()