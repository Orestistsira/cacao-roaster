import 'bpmn-font/dist/css/bpmn.css';
import 'diagram-js/assets/diagram-js.css';
import 'diagram-js-minimap/assets/diagram-js-minimap.css';
import './style/main.css';
import MultiInstanceApplication from './app/multi-instance/MultiInstanceApplication';

window.addEventListener('load', () => {
  const container = document.getElementById('container');
  if (!container) {
    return;
  }

  // Extract the playbook_id from the URL
  const urlPath = window.location.pathname;
  console.log('Url:', urlPath);
  const playbookId = urlPath.substring(1); // Remove the leading '/'

  // Check if the parsed playbookId is a valid number
  if (playbookId) {
    // Initialize with valid playbook_id
    console.log(`Playbook ID: ${playbookId}`);
    new MultiInstanceApplication(container, playbookId);
  } else {
    // Handle cases where playbookId is not a valid number
    console.log('Invalid Playbook ID, initializing without it');
    new MultiInstanceApplication(container);
  }
});
