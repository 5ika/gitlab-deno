/// <reference types="./types.d.ts" />

const GitLab = (options: GitLabOptions) => {
  const { host, token } = options;

  const fetchApi = async (
    path: string,
    payload?: GitlabAPIPayload,
    method = "GET"
  ) => {
    try {
      const response = await fetch(`${host}/api/v4${path}`, {
        method,
        body: payload ? JSON.stringify(payload) : null,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return {
    ProjectMilestones: {
      all(projectId: string) {
        return fetchApi(`/projects/${projectId}/milestones`);
      },
      findOne(projectId: string, milestoneId: string) {
        return fetchApi(`/projects/${projectId}/milestones/${milestoneId}`);
      },
      create(projectId: string, milestone: GitlabMilestone) {
        return fetchApi(`/projects/${projectId}/milestones`, milestone, "POST");
      },
      update(projectId: string, milestoneId: string, update: GitlabMilestone) {
        return fetchApi(
          `/projects/${projectId}/milestones/${milestoneId}`,
          update,
          "PUT"
        );
      },
    },
    GroupMilestones: {
      all(groupId: string) {
        return fetchApi(`/groups/${groupId}/milestones`);
      },
      findOne(groupId: string, milestoneId: string) {
        return fetchApi(`/groups/${groupId}/milestones/${milestoneId}`);
      },
      create(groupId: string, milestone: GitlabMilestone) {
        return fetchApi(`/groups/${groupId}/milestones`, milestone, "POST");
      },
      update(groupId: string, milestoneId: string, update: GitlabMilestone) {
        return fetchApi(
          `/groups/${groupId}/milestones/${milestoneId}`,
          update,
          "PUT"
        );
      },
    },
    Issues: {
      all(projectId: string) {
        return fetchApi(`/projects/${projectId}/issues`);
      },
      findOne(projectId: string, issueIid: string) {
        return fetchApi(`/projects/${projectId}/issues/${issueIid}`);
      },
      create(projectId: string, issue: GitLabIssue) {
        return fetchApi(`/projects/${projectId}/issues`, issue, "POST");
      },
      update(projectId: string, issueIid: string, update: GitLabIssue) {
        return fetchApi(
          `/projects/${projectId}/issues/${issueIid}`,
          update,
          "PUT"
        );
      },
    },
  };
};

export default GitLab;
