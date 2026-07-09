import {defineField, defineType} from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Usluga (cenovnik)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Naziv usluge',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategorija',
      type: 'string',
      options: {
        list: [
          {title: 'Elektroinstalacije', value: 'elektroinstalacije'},
          {title: 'Ugradnja rasvete', value: 'rasveta'},
          {title: 'Osigurači i table', value: 'osiguraci-i-table'},
          {title: 'Utičnice i prekidači', value: 'uticnice-i-prekidaci'},
          {title: 'Servis kućnih uređaja', value: 'servis-uredjaja'},
          {title: 'Ugradnja i servis klima uređaja', value: 'klima-uredjaji'},
          {title: 'Ugradnja EV punjača', value: 'ev-punjaci'},
        ],
      },
    }),
    defineField({
      name: 'subgroup',
      title: 'Podgrupa (unutar kategorije)',
      type: 'string',
      description:
        'npr. "Rasveta", "Utičnice i prekidači", "Razvodni ormani i osigurači", "Uzemljenje i zaštita" — koristi se za gušće grupisanje na stranici /cenovnik',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Kratak opis',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'priceFrom',
      title: 'Cena od (RSD)',
      type: 'number',
    }),
    defineField({
      name: 'priceTo',
      title: 'Cena do (RSD, opciono)',
      type: 'number',
    }),
    defineField({
      name: 'priceNote',
      title: 'Napomena o ceni',
      type: 'string',
      description: 'npr. "po komadu" ili "zavisi od dužine trase"',
    }),
    defineField({
      name: 'body',
      title: 'Detaljan opis',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'image',
      title: 'Slika',
      type: 'image',
    }),
    defineField({
      name: 'featured',
      title: 'Istaknuto na početnoj',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Redosled prikaza',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Redosled',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})
