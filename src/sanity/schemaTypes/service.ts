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
          {title: 'Montaža', value: 'montaza'},
          {title: 'Servis i održavanje', value: 'servis'},
          {title: 'Popravka kvarova', value: 'popravka'},
          {title: 'Dijagnostika i merenje', value: 'dijagnostika'},
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
