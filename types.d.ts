interface GitLabOptions {
  host: string;
  token: string;
}

interface GitlabMilestone {
  iid?: string | number;
  id?: string | number;
  title: string;
  description?: string;
  due_date?: string;
  start_date?: string;
}

type GitlabAPIPayload = GitlabMilestone;
