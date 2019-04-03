import { TopicUrls } from './topic';
import {
  tag,
  tagLogoType,
  tagNoIcon,
} from './topics';
import { topics } from './topics-data';

export const firebase = tag('Firebase').setRelated(
  // most are from firebase console left navbar:
  tagNoIcon('Firebase Authentication').setLogo('Firebase'),
  tagNoIcon('Firebase Realtime Database').setLogo('Firebase-realtime-database'),
  tagNoIcon('Firebase Cloud Firestore').setLogo('firebase-firestore'),
  tagNoIcon('Firebase Storage').setLogo('Firebase-storage'),
  tagNoIcon('Firebase Hosting').setLogo('Firebase-hosting'),
  tagNoIcon('Firebase Cloud Functions').setLogo('Firebase'),
  tagNoIcon('Firebase Stability').setLogo('Firebase'),
  tagNoIcon('Firebase Crashlytics').setLogo('Crashlytics'),
  tagNoIcon('Firebase Analytics').setLogo('Firebase'),
  tagNoIcon('Firebase Grow').setLogo('Firebase'),
  // Firebase: hosting, analytics, authentication, ...

);
export const angularMaterial = tag('Angular Material');
export const angularFire = tagNoIcon('AngularFire');
export const rxJs = tagNoIcon('RxJS');
export const materialDesign = tag('Material Design', null/** TODO: has icon: https://material.io */);
export const typeScript = tag('TypeScript');
export const ionic = tagLogoType('Ionic', 'ionic', 'https://ionicframework.com/', [],
  new TopicUrls(
    'https://en.wikipedia.org/wiki/Ionic_(mobile_app_framework)',
    'https://github.com/ionic-team/ionic',
    'https://www.npmjs.com/package/ionic',
    'https://stackoverflow.com/questions/tagged/ionic-framework',
    'https://stackshare.io/ionic',
    'https://twitter.com/Ionicframework',
  ));
export const reactiveX = tag('ReactiveX');
export const angularFlexLayout = tagNoIcon('Angular Flex-Layout', 'https://github.com/angular/flex-layout').setLogo('angular');
export const angularFlexLayoutResponsiveApi = tagNoIcon(
  'Angular Flex-Layout Responsive API', 'https://github.com/angular/flex-layout/wiki/Responsive-API').setLogo('angular');
export const protractor = tag('Protractor');
export const sass = tag('Sass');
export const npm = tagLogoType('NPM');
export const karma = tag('Karma');
export const jasmine = tag('Jasmine');
export const webPack = tag('Webpack');
export const angular = topics.Angular;
export const businessNetworking = tagNoIcon('Business Networking').setLogo('business--chart-line');
export const entrepreneurship = tagNoIcon('Entrepreneurship').setLogo('business--chart-line');

/** ============= */
/** ============= */
/** ============= */
/** ============= */
export const topicsOld = [
  angular, tagNoIcon('Angular Universal').setLogo('angular'),
  tagNoIcon('AngularJS', null, [],
    new TopicUrls(
      'https://en.wikipedia.org/wiki/AngularJS',
      'https://github.com/angular/angular.js',
      null,
      'https://stackoverflow.com/questions/tagged/angularjs',
      'https://stackshare.io/angularjs',
      null,
    )),
  tagNoIcon('PrimeNG', null,[],
    new TopicUrls(
      null,
      'https://github.com/primefaces/primeng',
      'https://www.npmjs.com/package/primeng',
      'https://stackoverflow.com/questions/tagged/primeng',
      null,
      'https://twitter.com/prime_ng'
    )),
  ionic, firebase,
  tagNoIcon('Web Performance Optimizations'),
  tagNoIcon('Google Maps',null, [],
    new TopicUrls(
      'https://en.wikipedia.org/wiki/Google_Maps',
      'https://github.com/googlemaps/',
      'https://www.npmjs.com/package/google-maps',
      'https://stackoverflow.com/questions/tagged/google-maps',
      'https://stackshare.io/google-maps',
      'https://twitter.com/googlemaps'
    )),
  'Facebook',
  'Twitter',
  tagLogoType('LinkedIn'),
  'Google Plus',
  protractor, karma, jasmine,
  // Cucumber
  tagNoIcon('PrimeFaces',null, [],
    new TopicUrls(
      'https://es.wikipedia.org/wiki/PrimeFaces',
      'https://github.com/primefaces/primefaces',
      null,
      'https://stackoverflow.com/questions/tagged/primefaces',
      null,
      'https://twitter.com/primefaces'
    )),
  tag('PHP', 'php', 'http://www.php.net/', [],
    new TopicUrls(
      'https://en.wikipedia.org/wiki/PHP',
      'https://github.com/php',
      'https://www.npmjs.com/search?q=php&page=1&ranking=popularity',
      'https://stackoverflow.com/questions/tagged/php',
      'https://stackshare.io/php',
      'https://twitter.com/php_net'
    )),
  materialDesign, typeScript,
  tag('Django', 'django', 'https://www.djangoproject.com/', [],
    new TopicUrls(
      'https://en.wikipedia.org/wiki/Django_(web_framework)',
      'https://github.com/django/django',
      null,
      'https://stackoverflow.com/questions/tagged/django',
      'https://stackoverflow.com/questions/tagged/django',
      'https://twitter.com/djangoproject'
    )),
  tag('Python', 'python', 'https://www.python.org/', [],
    new TopicUrls(
      'https://en.wikipedia.org/wiki/Python_(programming_language)',
      'https://github.com/python',
      null,
      'https://stackoverflow.com/questions/tagged/python',
      'https://stackshare.io/python',
      'https://twitter.com/ThePSF'
    )),
  tag('Ruby'), tagLogoType('Ruby On Rails'),
  tag('PeopleMatcher'),
  tag('TopicFriends', 'PeopleMatcher'),
  tag('UAP', null),
  tag('Android'), tag('Kotlin'), tag('KotlinJS', null), tag('Java'), tagNoIcon('Java EE'), 'C++', 'C',
  tag('C#', 'c_sharp'),
  tagNoIcon('ASP.NET'), tagNoIcon('ASP.NET MVC'), tagNoIcon('ASP.NET Core MVC') /* https://github.com/aspnet/Mvc */,
  tag('F#', 'fsharp'), 'JRuby',
  tag('iOS'), tag('Swift'), tag('Objective-C', null),
  tag('D3'), // Vega [Lite] - on top of d3. From Luis Sanchez

  webPack,
  tagNoIcon('Web Development'), tagNoIcon('CMS'), tagNoIcon('Selenium'), tagNoIcon('Blog Software'),
  tagNoIcon('Blogging'),
  tagNoIcon('VR'),
  'JavaScript', tag('ECMAScript', 'es6'),
  'Elm', 'Scala', tag('.NET', 'dotnet'), tag('.NET Core', null), 'Docker', 'ElasticSearch',
  tagNoIcon('Akka'),
  tagLogoType('Ember'), 'React', 'Redux', 'MobX', tagNoIcon('React Native'), 'Xamarin', tagNoIcon('Xamarin.Forms'),
  'Git',
  tag('TensorFlow', 'tensorflow'), 'OpenCV', // TODO: Keras
  'Appium', tagNoIcon('Robotium'),
  'JHipster', tagLogoType('Meteor'), tagLogoType('Hoodie'),
  'Laravel', 'CakePHP', 'Zend Framework', 'CodeIgniter', 'Symfony',
  tag('CSS3', 'css-3'), tag('Responsive Design', null), tag('HTML5', 'html-5'),
  tagLogoType('PWA'), tagNoIcon('SPA'), tag('REST', null), tag('HTTP', null), tag('WebSocket'), 'WebRTC', tagLogoType('Upwork'),
  tagLogoType('NodeJS').setName('Node.JS'), npm,
  tag('Seneca', 'seneca', 'http://senecajs.org/', [], new TopicUrls(
    null,
    'https://github.com/senecajs/seneca',
    'https://www.npmjs.com/package/seneca',
    'https://stackoverflow.com/questions/tagged/seneca',
    'https://stackshare.io/seneca',
    'https://twitter.com/senecajs',
    null
  )),
  tag('Swagger', 'swagger', 'https://swagger.io/', [], new TopicUrls(
    'https://en.wikipedia.org/wiki/Swagger_(software)',
    'https://github.com/swagger-api/swagger-core',
    'https://www.npmjs.com/package/swagger',
    'https://stackoverflow.com/questions/tagged/swagger',
    'https://stackshare.io/swagger-ui' /* not really swagger itself */,
    'https://twitter.com/swaggerapi',
    'https://alternativeto.net/software/swagger-io',
    'https://github.com/swagger-api/swagger-core/releases',
    'https://npm.runkit.com/swagger',
  )),
  sass, tagLogoType('Stylus'), tagLogoType('Less'),
  'Bitcoin', 'Ethereum', 'Steemit', 'Monero',
  tagNoIcon('Cryptocurrency'), tagNoIcon('Blockchain'), tagNoIcon('Cryptography'),
  // TODO: segregated witness (SegWit)
  'Cordova', 'PhoneGap',
  tagNoIcon('Game Design'),
  tagNoIcon('Game Development'),
  tagNoIcon('Geolocation'),
  tagNoIcon('Social graphs'), 'Open Graph',
  tagNoIcon('NoSQL'), 'PostgreSQL', 'MySQL', 'Oracle', // TODO: sqlite
  tagNoIcon('HMR - Hot Module Replacement'),
  rxJs, tagNoIcon('RxJava'), reactiveX,
  angularMaterial, angularFire, /* Note: versions will be specified separately, thus not "AngularFire2" */
  'SVG', tag('WordPress', 'wordpress-icon'), 'Drupal', 'Joomla', tagLogoType('jQuery'), 'jQuery Mobile', tagNoIcon('jQuery UI'),
  'PouchDB', tagNoIcon('CloudBoost'), 'Spring', tagLogoType('Vaadin'), 'Yarn',
  'Heroku', 'Jenkins', 'Vagrant', tag('Kubernetes', 'kubernets' /* they have a typo*/),
  tag('Vue.js', 'vue'),
  tag('Linux', 'tux'), tag('Debian Linux', 'debian'), tag('Ubuntu Linux', 'ubuntu') , tag('SUSE Linux', 'suse'),
  tag('Bash'),
  tag('RedHat Linux', 'redhat'),
  tag('Fedora Linux' /* Officially just "Fedora", but better for filtering*/, 'fedora'),
  tagNoIcon('Fedora' /* Just for compatibility with older data that I (Karol) have in firebase */),
  tagLogoType('CentOS Linux', 'centos'),
  tagNoIcon('Gentoo Linux'), tag('Arch Linux', 'archlinux'),
  'FreeBSD',
  'Redis', 'CouchBase', 'CouchDB', tagLogoType('MongoDB'), 'Memcached',
  tagNoIcon('Mongoose'),
  'PrestaShop', 'WooCommerce', tagNoIcon('osCommerce'), 'Magento', 'Shopify', tagNoIcon('BigCommerce'),
  'Travis CI',
  'CircleCI',
  tagNoIcon('Continuous Integration'),
  tagNoIcon('Continuous Delivery'),
  'Wix',
  tagLogoType('Lucene'), tagLogoType('Solr'),
  tag('macOS', 'macosx'),
  'Kinto',
  'KickStarter',
  'Lua',
  'Sencha',
  'Rust', tagNoIcon('D'),
  tagLogoType('AWS'), 'Azure', tagLogoType('Babel'), 'Bower', 'Gulp',
  tagLogoType('Groovy'), 'GWT', 'Haskell', tagNoIcon('Elixir'), 'Erlang',
  tagNoIcon('JetBrains MPS'),
  'Ansible',
  'Perl',
  'Polymer', tag('Web Components', 'webcomponents'),
  'Bootstrap', tagNoIcon('Clarity Design System') /* https://vmware.github.io/clarity/ */ ,
  'ng-bootstrap',
  'Capistrano', 'Chef', 'Puppet',
  'Clojure',  'CoffeeScript', /* TODO ClojureScript */
  'Electron',
  tagNoIcon('MyBatis'),
  'Gradle', tagLogoType('Maven'), 'Grails',
  'Neo4j', 'Hadoop',
  tagLogoType('OpenGL'), 'Unity',
  // tagLogoTipo('Backbone.js', 'backbone-icon'),
  tag('Backbone.js', 'backbone-icon'),
  tagNoIcon('Backend'),
  'Socket.IO',
  tagLogoType('Express', 'express', 'https://expressjs.com', [
      tag('Kraken.js', 'krakenjs', 'http://krakenjs.com/'),
      tag('FeathersJS', 'feathersjs', 'https://feathersjs.com/'),
      tag('KeystoneJS', 'keystonejs', 'http://keystonejs.com/'),
      tag('LoopBack', 'loopback', 'https://loopback.io/'),
      tag('MEAN Stack', 'meanio', 'http://mean.io/'),
      tag('Sails', 'sails', 'http://sailsjs.com/'),
    ], new TopicUrls(
    'https://en.wikipedia.org/wiki/Express.js',
    'https://github.com/expressjs/express',
    'https://www.npmjs.com/package/express',
    'https://stackoverflow.com/questions/tagged/express',
    'https://stackshare.io/expressjs',
    'https://twitter.com/expressjs',
    // TOOD: 'https://alternativeto.net/software/expressjs/',
    )
  ),
  'Sinatra',
  tag('NgRx' /* I've also seen different capitalizations: NgRx, ngRx etc */),
  tag('NGXS'),
  'Flask', tagNoIcon('Pylons'), tagNoIcon('Zope'),
  tagNoIcon('UX'), tagNoIcon('UI'), tagNoIcon('Usability'), tagNoIcon('Accessibility'),
  'GraphQL', 'Grunt', tag('Browserify', 'browserify-icon'),
  'Hibernate', tagNoIcon('NHibernate'), 'MariaDB', 'Material-UI',
  tagNoIcon('FinTech'), tagNoIcon('PropTech'),

  tagNoIcon('Law'), tagNoIcon('LOPD'),
  tagNoIcon('SEO'), tagNoIcon('JBoss'),
  tagNoIcon('Functional Programming'), tag('EC2', 'aws-ec2'), tag('GCP', 'logo_gcp_hexagon_rgb.png'), tag('G Suite'),
  'CocoaPods',
  tagLogoType('ArangoDB'),
  'Auth0',
  'Mapbox',
  tag('GitHub', 'github-icon'),
  tagNoIcon('Stencil'), /* Ionic */
  'OData', tagNoIcon('PowerBI'), tagNoIcon('SignalR'), // Mark S.
  tagNoIcon('Voice Interfaces'),
  tagNoIcon('Amazon Alexa'),
  tagNoIcon('Amazon Echo'),
  tagNoIcon('Google Home'),
  tagNoIcon('Cortana'),
  tagNoIcon('Google Docs'),
  tagNoIcon('Google AdWords'),
  tagNoIcon('Google AdSense'),
  tagNoIcon('Google Analytics'),
  tagNoIcon('Frontend'),
  tagNoIcon('Telerik UI'),
  tagNoIcon('Kendo UI'),
  'NativeScript',
  tagNoIcon('SOAP'),
  tagNoIcon('Microsoft SQL Server'),
  tagNoIcon('Microsoft Excel'),
  tagNoIcon('Microsoft Word'),
  tagNoIcon('Microservices'),
  tagNoIcon('Testing'),
  tagNoIcon('Quality Assurance'),
  tagNoIcon('Quality Engineering'),
  'Markdown',
  tagNoIcon('English Language'), tagNoIcon('Spanish Language'),
  tagNoIcon('French Language'), tagNoIcon('Portuguese Language'), tagNoIcon('German Language'),
  tagNoIcon('Italian Language'), tagNoIcon('Polish Language'),
  tagNoIcon('Russian Language'), tagNoIcon('Chinese Language'), tagNoIcon('Japanese Language'),
  tagNoIcon('Arabic Language'), tagNoIcon('Hindi Language'), tagNoIcon('Turkish Language'),
  tagNoIcon('Bioinformatics'), tagNoIcon('Layouts'), tagNoIcon('Graphic Design'), tagNoIcon('Logo Design'),
  tagNoIcon('Social Media'),
  tagNoIcon('Web Design'),
  tagNoIcon('Web Analytics'),

  tag('Business').setLogo('business--chart-line').setRelated(
    tagNoIcon('Venture Capital').setLogo('business--chart-line'),
    tagNoIcon('Seed Funding').setLogo('business--chart-line'),
    tagNoIcon('Angel Investment').setLogo('business--chart-line'),
    tagNoIcon('Bootstrapping').setLogo('business--chart-line'),
    tagNoIcon('Internet Business').setLogo('business--chart-line'),
    tagNoIcon('Finance').setLogo('business--chart-line'),
    tagNoIcon('Financing').setLogo('business--chart-line'),
    tagNoIcon('Marketing').setLogo('business--chart-line'),
    tagNoIcon('Search Engine Marketing').setLogo('business--chart-line') /* TODO: add acronym: SEM */,
    tagNoIcon('Inbound Marketing').setLogo('business--chart-line'),
    tagNoIcon('Advertising').setLogo('business--chart-line'),
    entrepreneurship,
    businessNetworking,
    tagNoIcon('Business Development').setLogo('business--chart-line'),
    tagNoIcon('Small Business').setLogo('business--chart-line'),
    tagNoIcon('Business Administration').setLogo('business--chart-line'),
    tagNoIcon('Startups').setLogo('business--chart-line'),
    tagNoIcon('Startup Financing').setLogo('business--chart-line'),
    tagNoIcon('Y Combinator').setLogo('ycombinator').setLogo('business--chart-line'),
    tagNoIcon('Freelance').setLogo('business--chart-line'),
    tagNoIcon('Freelance Platforms').setLogo('business--chart-line'),
    tagNoIcon('Freelancer.com').setLogo('business--chart-line'),
    tagNoIcon('Toptal').setLogo('business--chart-line'),
    tagNoIcon('Trabajador Autónomo (Spain)').setLogo('business--chart-line'),
    tagNoIcon('Recruitment').setLogo('business--chart-line'),
    tagNoIcon('Human Resources').setLogo('business--chart-line'),
    tagNoIcon('Management').setLogo('business--chart-line'),
    tagNoIcon('Project Management').setLogo('business--chart-line'),
    tagNoIcon('Sales').setLogo('business--chart-line'),
    tagNoIcon('Logistics').setLogo('business--chart-line'),
    tagNoIcon('Supply Chain').setLogo('business--chart-line'),
  ),

  tagNoIcon('Mobile apps'),
  tagNoIcon('Neuroscience'),
  tagNoIcon('Ecopreneurship'),
  tagNoIcon('Neural Networks'),
  tagNoIcon('Convolutional Neural Networks'),
  tagNoIcon('Machine Learning'),
  tagNoIcon('Artificial Intelligence'),
  tagNoIcon('Deep Learning'),
  tagNoIcon('DeepMind'),
  tagNoIcon('Big Data'),
  tagNoIcon('MapReduce'),
  tagNoIcon('Apache Mahout'),
  tagNoIcon('Google Bigtable'),
  tag('Apache HBase', 'hbase'),
  tag('Apache Mesos', 'mesos'),
  tag('Apache Drill', null),
  tag('Apache ZooKeeper', null),
  tagNoIcon('Data Science'),
  tagNoIcon('Data Analytics'),
  tagNoIcon('Data Mining'),
  tagNoIcon('Data Warehousing'),
  tagNoIcon('DevOps'),
  tagNoIcon('System Administration'),
  tagNoIcon('Open Source'),
  tagNoIcon('Augmented Reality'),
  tagNoIcon('Photography'),
  tagNoIcon('Video Editing'),
  tagNoIcon('YouTube'),
  tagNoIcon('Explainer Videos'),
  tagNoIcon('Geomarketing'),
  tagNoIcon('LAMP Stack'),
  tagNoIcon('Cyber Security'),
  tag('Chart.js', "chart-js" /* non-standard svg*/),
  tagNoIcon('Robotics'),
  tagNoIcon('Lego Mindstorms'),
  tagNoIcon('CSS Flexbox'),
  tagNoIcon('CSS Grid Layout'),
  tagNoIcon('Economy'),
  tagNoIcon('Economics'),
  tagNoIcon('Underscore_Test'),
  tag('R Language', 'r-lang'),
  tagLogoType('nginx'),
  'WebAssembly',
  'Struts',
  'Yammer',
  tagNoIcon('Office 365'),
  tagNoIcon('OneDrive'),
  tagNoIcon('Algorithms'),
  tagNoIcon('Data Structures'),
  tagNoIcon('Computer Networks'),
  tagNoIcon('Green Economy'),
  tagNoIcon('CleanTech'),
  tagNoIcon('Windows Phone'),
  tagNoIcon('Windows Forms'),
  tagNoIcon('Wearable Computing'),
  tagNoIcon('iWatch'),
  'Semantic UI',
  'Foundation',
  tagNoIcon('Email Deliverability'),
  tagNoIcon('LXD'),
  tagNoIcon('Adobe Photoshop'),
  tagNoIcon('Adobe Illustrator'),
  tagNoIcon('Adobe After Effects'),
  tagNoIcon('Calabash'),
  tagNoIcon('Calabash iOS'),
  tagNoIcon('Calabash Android'),
  'Jira',
  'GitLab',
  tagNoIcon('Mapbox Studio'),
  tagNoIcon('SystemJS'),
  'json',
  'OAuth',
  'jspm',
  tagLogoType('ag-Grid'),
  'SendGrid',
  'MailChimp',
  tag('Sauce Labs', 'saucelabs'),
  tag('Waffle'),
  tag('Protocol Buffers', null, 'https://developers.google.com/protocol-buffers/'),
  tag('Sketch'),
  tag('FIWARE', null, 'https://www.fiware.org/'),
  tag('Smart City', null),
  tag('Sustainable Development', null),
  tag('Apache Thrift', null, 'https://thrift.apache.org/'),
  tag('OpenID', null, 'http://openid.net/'),
  tag('OpenID Connect', null, 'http://openid.net/connect/'),
  tag('Hibernate Envers', null, 'http://hibernate.org/orm/envers/'),
  tag('Liquibase', null, 'http://www.liquibase.org/'),
  tag('Flyway', null, 'https://flywaydb.org/'),
  tag('Spring Boot', null, 'https://projects.spring.io/spring-boot/'),
  tag('Dropwizard', null, 'http://www.dropwizard.io/'),
  tagLogoType('Algolia', undefined, 'https://www.algolia.com/'),
  tag('Digital Marketing', null),
  tag('Django Rest Framework', null, 'http://www.django-rest-framework.org/'),
  tag('Python pandas', null, 'http://pandas.pydata.org/'),
  tag('NumPy', null, 'http://www.numpy.org/'),
  tag('Payment Processing', null),
  tag('Digital Payments', null),
  tag('Mobile Payments', null),
  tag('Materialize', 'materializecss', 'http://materializecss.com/'),
  tag('Browsersync', 'browsersync', 'https://www.browsersync.io/'),
  tag('BrowserStack', 'browserstack', 'https://www.browserstack.com/'),
  tag('NATS', null, 'https://nats.io/'),
  // tag('', null, ''),

  //, Green Tech, IoT, IoE
  // web3, Truffle Framework, Distributed Ledger Technology, Attention Economy, Ethlance, Steem,
  // remix, mist, DApp, DAO, TheDao
  // Smart contracts, Solidity, Private coin,
  // Ionic Creator, Bootstrap Studio
  // Hybris
  // Internationalization (i18n), localization (l11n), translations
  // English / Spanish language practice / interchange
  // CSS View Encapsulation, Shadow DOM
  // Celery
  // RhoMobile
  /* Mark:                       Just created a profile on there. It's looking very good 👍
   A couple of things for you to add to the list:
   // DONE: ProtoBuf, OpenID Connect */
  tagNoIcon('Security'),
  tagNoIcon('Computer Security'),
  tagNoIcon('Computer Network Security'),
  tag('Moleculer', undefined, 'https://moleculer.services/', [], new TopicUrls(
    null,
    'https://github.com/ice-services/moleculer',
    'https://www.npmjs.com/package/moleculer',
    null,
    null,
    'https://twitter.com/MoleculerJS',
    null,
    'https://github.com/ice-services/moleculer/blob/master/CHANGELOG.md',
    'https://runkit.com/icebob/moleculer-quick-start',
  )),
  tagNoIcon('Træfik'),
  tagNoIcon('Alpine Linux'),
  tagNoIcon('TCP/IP'), // NOTE: slash - special char for storing in firebase
  tagNoIcon('SQL'),
  tagNoIcon('Remote Work'),
  tagNoIcon('Consulting'),
  tagNoIcon('Chirimoya'),
  // TODO: Accelerated Mobile Pages
  // TODO: Business Intelligence
  /* DONE: hibernate
   DONE: Hibernate envers - Adam Warski
   DONE: Liquibase / Flyway - wersjonowanie SQL
   DONE: Spring Boot / Dropwizard / JHipster */

  // TODO: Heilbronn:
  // - Arduino, Raspberry Pi

  // Alex Moron:
  // Deployment
  // Web Hosting
  // Debugging
  // Adobe Premiere

  // DONE: algolia
  // angellist
  // self-driving cars/vehicles
  // Electric vehicles
  // Tesla
  // TODO: Hyperloop
  // TODO: check Malaga meetup topics

  // TODO: Handlebars.js, Mustashe
  // LoDash, Underscore.js, Ramda

  // PWA: AppShell, Workbox, Service Workers, HTTP Push
  // IndexedDB, LocalStorage
  // ngx-bootstrap

  // NestJS: A progressive Node.js framework for building efficient and scalable server-side applications on top of TypeScript & JavaScript (ES6 / ES7 / ES8) heavily inspired by Angular 😻🚀

  // CI: Continous Integration, CD: Continuous Delivery
  // RethinkDB
  tagNoIcon('Web Animations API'),
  'Jest',

  tagNoIcon('Electronic Voting'), tagNoIcon('Activism'), tagNoIcon('Volunteering'),
  tagNoIcon('Affinity Designer'),
  tagNoIcon('Psychology'),
  tagNoIcon('StackBlitz'),
  tagNoIcon('Java Server Faces (JSF)'),
  tag('Dexie.js', 'dexie-js'),
  'Aurelia',
  'Marionette',
  'Subversion',
  tagNoIcon('Cypress' /* From David Atencia GitHub repo :) */)
  // TODO: Cassandra
]
