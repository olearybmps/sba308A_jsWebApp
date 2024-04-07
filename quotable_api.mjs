// quotable_api.mjs
// https://github.com/lukePeavey/quotable
const BASE_URL = 'https://api.quotable.io';

async function fetchData(path) {
  const response = await fetch(`${BASE_URL}${path}`);
  if (!response.ok) {
    throw new Error(`Status: ${response.status}`);
  }
  return await response.json();
}

export async function getRandomQuote() {
  return fetchData('/random');
}

export async function getRandomQuotes(limit = 10) {
  return fetchData(`/quotes/random?limit=${limit}`);
}

export async function listQuotes(page = 1, limit = 10) {
  return fetchData(`/quotes?page=${page}&limit=${limit}`);
}

export async function listQuotesByAuthor(authorName, page = 1, limit = 10) {
  return fetchData(`/quotes?author=${encodeURIComponent(authorName)}&page=${page}&limit=${limit}`);
}

export async function getQuoteById(id) {
  return fetchData(`/quotes/${id}`);
}

export async function listAuthors(page = 1, limit = 10) {
  return fetchData(`/authors?page=${page}&limit=${limit}`);
}

export async function searchQuotes(query, page = 1, limit = 10) {
  return fetchData(`/search/quotes?query=${encodeURIComponent(query)}&page=${page}&limit=${limit}`);
}

export async function searchAuthors(query, page = 1, limit = 10) {
  return fetchData(`/search/authors?query=${encodeURIComponent(query)}&page=${page}&limit=${limit}`);
}

export async function getAuthorBySlug(slug) {
  return fetchData(`/authors/${slug}`);
}

export async function listTags(page = 1, limit = 10) {
  return fetchData(`/tags?page=${page}&limit=${limit}`);
}