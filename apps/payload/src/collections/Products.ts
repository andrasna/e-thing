import { CollectionConfig } from 'payload/types'

export const Products: CollectionConfig = {
  slug: 'products',
  fields: [
    {
      name: 'productTitle',
      type: 'text',
      required: true,
    },
  ],
}

export default Products
