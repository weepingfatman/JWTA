if Rails.env.production?
	$redis = Redis.new(host: 'localhost', port: 6379)
end