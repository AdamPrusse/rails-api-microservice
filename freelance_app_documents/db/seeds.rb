# create_table "freelance_documents", force: :cascade do |t|
#     t.string "title"
#     t.string "description"
#     t.text "file_url"
#     t.text "image_url"
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#   end

10.times do |d|
FreelanceDocument.create!(
	title: "Document #{d}", 
	description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.", 
	file_url: "https://docs.google.com/document/d/1UUgAob6ZpivgkgCbMD84JMMRc1flrzCPKybtQoAfASo/edit?usp=sharing", 
	image_url: 'https://s3.amazonaws.com/devcamp-static/images/freelance-img.jpg'
	)
end
