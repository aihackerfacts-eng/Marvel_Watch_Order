-- Run this in Supabase Dashboard > SQL Editor.
-- Row Level Security ensures each signed-in user can access only their own rows.
create table if not exists public.watch_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  title_id text not null,
  watched boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (user_id, title_id)
);

alter table public.watch_progress enable row level security;

create policy "Users can read their own watch progress"
on public.watch_progress for select
using (auth.uid() = user_id);

create policy "Users can insert their own watch progress"
on public.watch_progress for insert
with check (auth.uid() = user_id);

create policy "Users can update their own watch progress"
on public.watch_progress for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Users can delete their own watch progress"
on public.watch_progress for delete
using (auth.uid() = user_id);
