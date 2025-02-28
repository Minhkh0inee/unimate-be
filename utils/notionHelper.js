const transformNotionToScholarship = (notionData) => {
    return {
      university: notionData.properties.University?.rich_text[0]?.plain_text || "Unknown",
      name: notionData.properties['Scholarship Name'].title[0]?.plain_text || "Unknown",
      type: notionData.properties.Type?.select?.name || "Partial",
      degree_level: notionData.properties["Degree Level"]?.select?.name || "Undergraduate",
      country: notionData.properties.Country?.select?.name || "Unknown",
      deadline: notionData.properties.Deadline?.date?.start || null,
      major: notionData.properties.Major?.multi_select[0].name || null,
      // description: notionData.properties.Description?.rich_text[0].name || null,
      notion_url: notionData.url || null,
      website_link: notionData.properties['Website Link'].url
    };
  };
  
  module.exports = { transformNotionToScholarship };
  