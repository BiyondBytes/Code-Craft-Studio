'use server'

import { db } from '../../prisma/databasePrisma'
import { redirect } from 'next/navigation'
import {
  Plan,
  Prisma,
  Role,
  User,
} from '@prisma/client'
// import { v4 } from 'uuid'
import {
  CreateFunnelFormSchema,
  CreateMediaType,
  UpsertFunnelPage,
} from './types'
import { z } from 'zod'
import { revalidatePath } from 'next/cache'

export const getAuthUserDetails = async () => {
  const user =  "getcurrentuser"

  return 'userData'
}




export const getUser = async (id: string) => {
  const user = await db.user.findUnique({
    where: {
      id,
    },
  })

  return user
}



