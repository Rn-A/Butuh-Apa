import ngrok from '@ngrok/ngrok';

(async function() {
  const listener = await ngrok.forward({ 
    addr: 3000, 
    authtoken: '3CzMHDhywuCFrJjJqtlsvhZ68gW_82aLNgtNcPYtExfQ8CCwS'
  });
  console.log(`\n🌐 Web kamu bisa diakses online di: ${listener.url()}\n`);
  console.log('Jangan tutup terminal ini! Tekan Ctrl+C untuk stop.\n');
})();
