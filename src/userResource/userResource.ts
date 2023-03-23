import { GithubUser, GithubError } from "../types";
import { isGithubUser } from "../utils";
import { extractLocalUser } from "../utils";

const BASE_URL = 'https://api.github.com/users/';

export const userResource = async (username: string) => {
    console.log('!!!')
    const url = `${BASE_URL}${username}`,
            result = await fetch(url),
            user = await result.json() as GithubUser | GithubError;
    
    if (isGithubUser(user)) {
        return extractLocalUser(user);
    } else {
        return null;
    }
}
