import '{{name}}';

const oneviewFooter = document.querySelector('oneview-footer');
oneviewFooter.i18n = {
  signOut: '[Fr] Sign Out',
  nextBillEstimator: '[Fr] NextBillEstimator',
  shareEverythingEstimator: '[Fr] Share Everything Estimator',
  trainingMaterials: '[Fr] Training Materials',
  sspLinks: {
    sspMainPage: '[Fr] SSP Main Page'
  }
};

oneviewFooter.agent = {firstName: 'Allen', lastName: 'Kim'};
oneviewFooter.addEventListener('logout', _ => alert('firing logout event'));
oneviewFooter.addEventListener('deeplink', e => alert('firing deeplink event' + e.detail));
