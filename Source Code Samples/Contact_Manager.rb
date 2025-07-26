@contacts = []

def add
  puts "Name:"
  name = gets.chomp
  puts "Phone:"
  phone = gets.chomp
  @contacts << [name, phone]
end

def show
  @contacts.each_with_index do |c, i|
    puts "#{i+1}. #{c[0]} => #{c[1]}"
  end
end

def delete
  puts "Enter index:"
  i = gets.chomp.to_i
  @contacts.delete_at(i - 1)
end

def save
  print "filename: "
  f = gets.chomp
  File.open(f, "w") do |file|
    @contacts.each { |c| file.puts("#{c[0]},#{c[1]}") }
  end
end

def load
  print "filename: "
  f = gets.chomp
  data = File.read(f).split("\n")
  data.each do |line|
    parts = line.split(",")
    @contacts << parts
  end
end

def menu
  puts "1.Add 2.Show 3.Delete 4.Save 5.Load 6.Exit"
end

loop do
  menu
  c = gets.chomp
  if c == "1"
    add
  elsif c == "2"
    show
  elsif c == "3"
    delete
  elsif c == "4"
    save
  elsif c == "5"
    load
  elsif c == "6"
    break
  else
    puts "???"
  end
end
