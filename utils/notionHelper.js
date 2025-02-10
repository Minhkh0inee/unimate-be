const transformNotionToScholarship = (notionData) => {
    return {
      university: notionData.properties.University?.title?.[0]?.plain_text || "Unknown",
      name: notionData.properties.Title?.rich_text?.[0]?.plain_text || "Unknown",
      type: notionData.properties.Type?.select?.name || "Partial",
      degree_level: notionData.properties["Degree Level"]?.select?.name || "Undergraduate",
      country: notionData.properties.Country?.select?.name || "Unknown",
      deadline: notionData.properties.Deadline?.date?.start || null,
      notion_url: notionData.url || null,
    };
  };
  
  module.exports = { transformNotionToScholarship };
  