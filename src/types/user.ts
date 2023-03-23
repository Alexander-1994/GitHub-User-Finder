type OrThisOrThat = string | null

export type GithubUser = {
    login: string,
    id: number,
    avatar_url: string,
    name: OrThisOrThat,
    company: OrThisOrThat,
    blog: OrThisOrThat,
    location: OrThisOrThat,
    bio: OrThisOrThat,
    twitter_username: OrThisOrThat,
    public_repos: number,
    followers: number,
    following: number,
    created_at: string,
}

export type LocalGithubUser = {
    login: string,
    avatar: string,
    name: OrThisOrThat,
    company: OrThisOrThat,
    blog: OrThisOrThat,
    location: OrThisOrThat,
    bio: OrThisOrThat,
    twitter: OrThisOrThat,
    repos: number,
    followers: number,
    following: number,
    created: string,
}

export type GithubError = {
    message: string,
    documentation_url: string,
}