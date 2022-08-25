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

interface GitLabIssue {
  iid?: string | number;
  id?: string | number;
  title: string;
  description?: string;
  labels?: string;
  milestone_id?: integer;
  weight?: number;
  assignee_ids?: number[];
}

type GitlabAPIPayload = GitlabMilestone;
