export type Client = {
  name: string;
  slug: string;
  /** Logo path under public/ (falls back to the client name as text). */
  logo?: string;
  url?: string;
  /** One line about the client, shown in case studies. */
  about?: string;
  location?: string;
  /** We built a customised BirStock for this client. */
  customized?: boolean;
};

export const clients: Client[] = [
  {
    name: "iQiP",
    slug: "iqip",
    logo: "/clients/iqip-logo.svg",
    url: "https://iqipindia.com/",
    about: "Intellectual property advisory firm - trademarks, patents, copyright, designs and global IP",
    location: "Ahmedabad, Gujarat",
    customized: true,
  },
  {
    name: "Ansi Techno",
    slug: "ansi-techno",
    logo: "/clients/ansi-techno-logo.png",
    url: "https://ansitechno.com/",
    about: "IT dealer - refurbished laptops, CCTV installation and printer parts",
    location: "Chhapi & Palanpur, Gujarat",
  },
  {
    name: "Birtik Tech Pvt Ltd",
    slug: "birtik-tech",
    logo: "/clients/birtiktech-logo.png",
    url: "https://birtiktech.com/",
    about: "Software company - websites, mobile apps, custom software and SEO",
    location: "Banaskantha, Gujarat",
  },
];

export const customizedClients = clients.filter((c) => c.customized);
