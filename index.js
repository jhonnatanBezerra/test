

const createArchive = () => {
  const data = 'console.log("Hello World");';

  require('fs').writeFile('restart_pm2', data, (err) => {
    if (err) throw err;
    console.log('Arquivo salvo!');
  });


}

createArchive();