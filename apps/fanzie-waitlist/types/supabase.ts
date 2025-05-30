export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      waitlist: {
        Row: {
          id: number
          email: string
          joined_at: string
          created_at: string
        }
        Insert: {
          id?: number
          email: string
          joined_at?: string
          created_at?: string
        }
        Update: {
          id?: number
          email?: string
          joined_at?: string
          created_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
