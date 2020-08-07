interface team {
  develop: profile[];
  sound: profile[];
  prod: profile[];
  art: profile[];
  game: profile[];
}

enum desc {
  CODE_LEAD = 'Code Lead',
  DESENVOLVEDOR = 'Desenvolvedor',
  ART_LEAD = 'Art Lead',
  ARTISTA = 'Artista',
  SOUND_LEAD = 'Sound Lead',
  SOUND_DESIGNER = 'Sound Designer',
  HEAD_TEAM = 'Head Team',
  D_LEAD = '3D Lead',
  D_MODELER = '3D Modeler',
  GAMER_DESIGNER = 'Game Designer',
}

export interface profile {
  name: string;
  img?: string;
  desc: desc | string;
  contacts?: contacts;
}

export interface contacts {
  linkedin?: string;
  soundcloud?: string;
  site?: string;
  git?: string;
  twitter?: string;
  artstation?: string;
  instagram?: string;
}

export const teamsData: team = {
  develop: [
    {
      name: 'Pedro Belluomini',
      img: 'Pedro_belluomini.jpg',
      desc: desc.CODE_LEAD,
      contacts: {
        git: 'https://github.com/PedroHBell',
        linkedin: 'https://www.linkedin.com/in/pedro-belluomini-987277169/',
      },
    },
    {
      name: 'Antonio Martins',
      img: 'Antonio_Martins.jpg',
      desc: desc.CODE_LEAD,
      contacts: {
        git: 'https://github.com/tony2055',
        linkedin:
          'https://www.linkedin.com/in/antonio-henrique-soares-martins-665a61162/',
      },
    },
    {
      name: 'Caio Marques',
      desc: desc.DESENVOLVEDOR,
      contacts: {
        git: 'https://github.com/caiomarqs',
        soundcloud: 'https://soundcloud.com/cjrbeatz',
        linkedin: 'https://www.linkedin.com/in/caiomarqs',
      },
    },
    {
      name: 'Paulo Oliveira',
      img: 'Paulo_Belluco.jpg',
      desc: desc.DESENVOLVEDOR,
      contacts: {
        git: 'https://github.com/PauloTadeu2k',
        linkedin:
          'https://www.linkedin.com/in/paulo-tadeu-belluco-de-oliveira-7171a0151/',
      },
    },
    {
      name: 'Caique Eduardo',
      img: 'Caique_Eduardo.jpg',
      desc: desc.DESENVOLVEDOR,
      contacts: {
        git: 'https://github.com/Caique9955',
        instagram: 'https://www.instagram.com/caique_eduu/?hl=pt-br',
        linkedin: 'https://www.linkedin.com/in/caique-eduardo-534a44197/',
      },
    },
    {
      name: 'Lucas Lima',
      img: 'Lucas_Lima.jpg',
      desc: desc.DESENVOLVEDOR,
      contacts: {
        linkedin: 'https://www.linkedin.com/in/lucas-lima-26642313b',
      },
    },
    {
      name: 'Pedro Miguel',
      img: 'Pedro_Miguel.jpg',
      desc: desc.DESENVOLVEDOR,
      contacts: {
        linkedin:
          'https://www.linkedin.com/in/pedro-miguel-contreiras-siqueira-762287195/',
      },
    },
    {
      name: 'Raphael Batista',
      img: 'Raphael_Batista.jpg',
      desc: desc.DESENVOLVEDOR,
      contacts: {
        git: 'https://github.com/RaphaelAbracos',
        twitter: 'https://twitter.com/raphael_abracos',
      },
    },
    {
      name: 'Willian Carvalho',
      img: 'Willian_Carvalho.jpg',
      desc: desc.DESENVOLVEDOR,
      contacts: {
        git: 'https://github.com/WilliCarvalho',
        linkedin: 'https://www.linkedin.com/in/willian-carvalho/',
      },
    },
    {
      name: 'Yago França',
      img: 'Yago_França.jpg',
      desc: desc.DESENVOLVEDOR,
      contacts: {
        git: 'https://github.com/YagoFranca',
        linkedin: 'https://www.linkedin.com/in/yago-de-souza-frança-378ba8144',
      },
    },
  ],
  sound: [
    {
      name: 'Matheus Boeira',
      img: 'Matheus_Boeira.jpg',
      desc: desc.SOUND_LEAD,
      contacts: {
        soundcloud: 'https://soundcloud.com/808bhz-910924459',
        instagram: 'https://www.instagram.com/808bhz/',
      },
    },
    {
      name: 'Giulio Vinicius',
      img: 'Giulio_Vinicius.jpg',
      desc: desc.SOUND_DESIGNER,
      contacts: { twitter: 'https://twitter.com/Mone_Ultimate' },
    },
    {
      name: 'Gustavo Mizutani',
      img: 'Gustavo_Mizutani.jpg',
      desc: desc.SOUND_DESIGNER,
      contacts: {
        soundcloud: 'https://soundcloud.com/moetrash',
        twitter: 'https://twitter.com/moetorash',
        instagram: 'https://www.instagram.com/moetrash_/?hl=pt-br',
        linkedin: 'https://www.linkedin.com/in/gustavo-mizutani-4801521b4',
      },
    },
  ],
  prod: [
    {
      name: 'Guilherme Romano',
      img: 'guilherme_romano.jpg',
      desc: desc.HEAD_TEAM,
      contacts: {
        linkedin: 'https://www.linkedin.com/in/guilherme-romano-383260169/',
        twitter: 'https://twitter.com/GuilhermeRomano',
        instagram: 'https://www.instagram.com/romano_controller/',
      },
    },
  ],
  art: [
    {
      name: 'Vinícius Machado',
      img: 'Vinícius_Machado.jpg',
      desc: desc.ART_LEAD,
      contacts: {
        artstation: 'https://www.artstation.com/vleon',
        linkedin:
          'https://www.linkedin.com/in/vin%C3%ADcius-machado-le%C3%B4nidas-411a47165/',
      },
    },
    {
      name: 'Mateus Maia',
      img: 'Mateus_Maia.jpg',
      desc: desc.ARTISTA,
      contacts: {
        artstation: 'https://www.artstation.com/mateusdoin',
        twitter: 'https://twitter.com/mcvxs',
      },
    },
    {
      name: 'Wesley Andrade',
      img: 'Wesley_Andrade.jpg',
      desc: desc.ARTISTA,
      contacts: { twitter: 'https://twitter.com/andrart7' },
    },
    {
      name: 'Arthur Lucas',
      img: 'Arthur_Lucas.jpg',
      desc: desc.ARTISTA,
      contacts: {
        linkedin: 'https://www.linkedin.com/in/arthur-lucas-4969981a0/',
      },
    },
    {
      name: 'Pedro Caxa',
      img: 'Pedro_Caxa.jpg',
      desc: desc.D_LEAD,
      contacts: {
        twitter: 'https://twitter.com/Pedrocaxa_',
        instagram: 'https://www.instagram.com/pedrocaxa/',
        linkedin: 'https://www.linkedin.com/in/pedro-henrique-m-08727b130/',
      },
    },
    {
      name: 'David Henrique',
      img: 'David_Henrique.jpg',
      desc: desc.D_MODELER,
      contacts: {
        instagram: 'https://www.instagram.com/djdinoz_/',
        linkedin:
          'https://www.linkedin.com/in/david-henrique-andrade-gomes-92b214173/',
      },
    },
    { name: 'Vitor Batista', img: 'vitor_batista.png', desc: desc.D_MODELER },
  ],
  game: [
    { name: 'Felipe Reis', img: 'Felipe_Reis.jpg', desc: desc.GAMER_DESIGNER },
    { name: 'João Victor', img: 'João_Victor.jpg', desc: desc.GAMER_DESIGNER },
  ],
};
