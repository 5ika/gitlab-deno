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
  };
};

export default GitLab;
