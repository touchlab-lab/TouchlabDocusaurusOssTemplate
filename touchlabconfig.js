const orgName = "touchlab-lab";
const repoName = "TouchlabDocusaurusOssTemplate";

const docusaurusConfig = {
    title: "Docusaurus Template",
    tagline: "Touchlab Docusaurus Template Project",
    url: `https://${orgName}.github.io/`,
    baseUrl: `/${repoName}/`,
    organizationName: orgName, // Usually your GitHub org/user name.
    projectName: repoName, // Usually your repo name.

};

const extraConfig = {
    trackingID: 'G-6T3LZJGPGZ',
}

module.exports = {
    docusaurusConfig: docusaurusConfig,
    extraConfig: extraConfig
};