export interface Tecnologia {
  nome: string;
  icone: string;
}

export interface CategoriaTecnologia {
  categoria: string;
  tecnologias: Tecnologia[];
}

export const CATEGORIAS: CategoriaTecnologia[] = [
  {
    categoria: 'Backend',
    tecnologias: [
      {
        nome: 'C#',
        icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
      },
      {
        nome: '.NET',
        icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg'
      },
      {
        nome: 'Node.js',
        icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
      },
      {
        nome: 'PHP',
        icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
      }
    ]
  },

  {
    categoria: 'Frontend',
    tecnologias: [
      {
        nome: 'Angular',
        icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg'
      },
      {
        nome: 'React',
        icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
      },
      {
        nome: 'JavaScript',
        icone: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg'
      },
      {
        nome: 'TypeScript',
        icone: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg'
      },
      {
        nome: 'HTML5',
        icone: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg'
      },
      {
        nome: 'CSS3',
        icone: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg'
      }
    ]
  },

  {
    categoria: 'Banco de Dados',
    tecnologias: [
      {
        nome: 'SQL Server',
        icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg'
      },
      {
        nome: 'Oracle',
        icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg'
      },
      {
        nome: 'MySQL',
        icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
      },
      {
        nome: 'MongoDB',
        icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
      },
      {
        nome: 'PostgreSQL',
        icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
      }
    ]
  },

  {
    categoria: 'Cloud & DevOps',
    tecnologias: [
    {
      nome: 'AWS',
      icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
    },
    {
      nome: 'Azure',
      icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'
    },
    {
      nome: 'Azure DevOps',
      icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg'
    },
    {
      nome: 'Docker',
      icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
    },
    {
      nome: 'GitHub',
      icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },
    {
      nome: 'GitLab',
      icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg'
    },
    {
      nome: 'Linux',
      icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'
    }
    ]
  }
];