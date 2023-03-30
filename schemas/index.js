export const schemaTypes = [
    {
      name: 'author',
      type: 'document',
      title: 'Author',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string'
        },
        {
          name: 'avatar',
          title: 'Avatar',
          type: 'image'
        }
      ]
    },
    {
        name: 'blog',
        type: 'document',
        title: 'Blog',
        fields: [
          {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: (Rule) => { return Rule.required().min(5).max(20)}
          },
          {
            name: 'subtitle',
            type: 'string',
            title: 'Subtitle'
          },
          {
            name: 'date',
            title: 'Date',
            type: 'datetime',
            validation: (Rule) => { return Rule.required()}
          },
          {
            name: 'coverImage',
            title: 'Cover Init',
            type: 'image',
            options: {
              hotspot: true
            },
            fields: [
              {
                type: 'string',
                name: 'caption',
                title: 'Caption',
              }
            ],
          },
          {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
              {
                type: 'block'
              },
              {
                type: 'image',
                fields: [
                  {
                    title: 'Position',
                    name: 'position',
                    type: 'string',
                    options: {
                      list: [
                        {
                          title: 'Center',
                          value: 'center'
                        },
                        {
                          title: 'Left',
                          value: 'left'
                        },
                        {
                          title: 'Right',
                          value: 'right'
                        }
                      ],
                      layout: 'radio',
                      isHighlighted: true
                    }
                  },
                  {
                    type: 'text',
                    name: 'alt',
                    title: 'Description',
                    option: {
                      isHighlighted: true
                    }
                  }
                ],
                options: {
                  hotspot: true
                }
              },
              {
                type: 'code',
                options: {
                  withFilename: true
                }
              }
            ]
          },
          {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{type: 'author'}],
            validation: (Rule) => { return Rule.required()}
          },
          {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            validation: (Rule) => { return Rule.required()}
          }   
        ]       
      }
]
