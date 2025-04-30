interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Workouts Page',
  siteUrl: 'https://yaoshubin3574.github.io/workouts_page/',
  logo: 'https://p.sda1.dev/23/dabbc3fe25a87a2af69e4cd2f90d1490/logo.jpg',
  description: 'YaoShubin Workouts Page',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Blog',
      url: '',
    },
    {
      name: 'About',
      url: '',
    },
  ],
};

export default data;
