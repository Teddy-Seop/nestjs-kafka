module.exports = {
  apps: [
    {
      name: 'Worker',
      script: './dist/apps/worker/main.js',
      exec_mode: 'cluster',
      instances: '3',
      merge_logs: true,
      watch: false,
      env: {},
    },
  ],
};
