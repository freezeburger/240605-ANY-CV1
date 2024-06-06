import { Email, UniqueId, Url, Username } from "../../core/types/generics.types"

export interface User {
  id: UniqueId
  name: string
  username: Username
  email: Email<'orsys.fr'>
  address: Address
  phone: string
  website: Url
  company: Company
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}
